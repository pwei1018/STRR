<template>
  <div data-test-id="application-submitted-page">
    <BcrosTypographyH1
      :text="tApplicationConfirm('submitted')"
      data-test-id="account-page-title"
      class="mobile:pb-[20px] mobile:mx-[8px] pb-[32px]"
    />
    <div class="bg-white py-[22px] px-[30px] flex flex-row mobile:px-[8px] mobile:[py-16px] mobile:flex-col">
      <img
        class="self-start mr-[10px] mt-[2px] mobile:[mb-8px]"
        src="/icons/create-account/check_circle.svg"
        :alt="tApplicationConfirm('altTextConfirm')"
      >
      <div>
        <p class="mb-[24px] mobile:[mb-8px]">
          {{ tApplicationConfirm('submittedForProperty') }}
        </p>
        <p class="mb-[24px] font-bold">
          {{
            fetchedRegistration?.unitAddress
              ? `${fetchedRegistration.unitAddress.streetNumber} ${
                fetchedRegistration.unitAddress.streetName
              }${
                fetchedRegistration.unitAddress.unitNumber
                  ? `, ${fetchedRegistration.unitAddress.unitNumber}`
                  : ''
              }`
              : '-'
          }}
        </p>
        <p class="mb-6">
          {{ tApplicationConfirm('reviewProcess') }}
        </p>
        <p class="m:mb-6">
          {{ tApplicationConfirm('updateListingDueDate') }}
        </p>
      </div>
    </div>
    <div class="mobile:mx-[8px]">
      <BcrosTypographyH2 :text="tApplicationConfirm('links')" class="mt-[32px] text-[18px] mb-[24px]" />
      <p class="mb-[24px]">
        <!-- eslint-disable-next-line max-len -->
        <a @click="goToHostDashboard">{{ tApplicationConfirm('status') }}</a> {{ tApplicationConfirm('dashboard') }}
      </p>
      <p class="mb-[24px]">
        {{ tApplicationConfirm('haveAnotherProperty') }}
      </p>
      <BcrosButtonsPrimary
        :label="tApplicationConfirm('startNewApplication')"
        :action="goToCreateAccount"
        class-name="font-bold"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'

const route = useRoute()
const fetchedRegistration = ref()
const { t } = useTranslation()
const { goToCreateAccount, goToHostDashboard } = useBcrosNavigate()

const tApplicationConfirm = (translationKey: string) => t(`createAccount.applicationConfirm.${translationKey}`)

const id = route.params.id

const apiURL = useRuntimeConfig().public.strrApiURL
const axiosInstance = addAxiosInterceptors(axios.create())

axiosInstance.get(`${apiURL}/registrations`)
  .then((res) => {
    res.data.forEach((registration: any) => {
      if (registration.id.toString() === id.toString()) {
        fetchedRegistration.value = registration
      }
    })
  })

</script>
