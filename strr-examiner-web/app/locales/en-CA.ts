/* eslint-disable max-len */
export default {
  alert: {
    prRequired: {
      title: 'Your property is in a location where the principal residence requirement applies.'
    },
    straaExempt: {
      title: '{boldStart}Registration Not Required:{boldEnd} This address appears to be located on First Nations land and is therefore exempt from the {italicStart}Short-term Rental Accommodations Act{italicEnd}. You do not need to register a short-term rental at this address.'
    },
    strProhibited: {
      title: 'Some types of short-term rentals are not permitted by your local government.',
      description: 'Contact your local government to understand what rules apply to short-term rentals in your community before you submit a registration application. Your registration will be denied if your short-term rental type is not permitted by your local government.',
      note: '{boldStart}Note:{boldEnd} Currently, short-term rental application fees are {boldStart}non-refundable.{boldEnd}'
    },
    prExempt: {
      title: "Short-term rentals are allowed in any of the host's properties."
    }
  },
  feeSummary: {
    itemLabels: {
      HOSTREG_1: 'STR Application Fee',
      HOSTREG_2: 'STR Application Fee'
    }
  },
  form: {
    pr: {
      declaration: {
        intro: 'As required by section 14 (2) of the {italicStart}Short-Term Accommodations Rental Act{italicEnd} (the Act), I declare the property host will comply with the principal residence restriction in the Act and provide the short-term rental accommodation services described in this registration in one or both of:',
        list: {
          a: 'the property host’s principal residence,',
          b: "not more than one secondary suite or other accessory dwelling unit that is on the land parcel associated with the property host's principal residence."
        },
        agreement: 'I understand that if the property host does not comply with the requirement to provide the short-term rental accommodation services in the principal residence, the property host may be subject to enforcement action under Part 4 of the Act, including being ordered to pay an administrative penalty.'
      },
      exemptReason: {
        EXEMPT_COMMUNITY: 'Located in exempt community',
        STRATA_HOTEL: 'Eligible strata hotel or motel',
        FARM_LAND: 'Farm land (BC Assessment Farm Class 9)',
        OTHER: 'Other exempted accommodation service provider'
      },
      exemptOtherProvider: {
        TIMESHARE: 'Timeshare',
        FRACTIONAL_OWNERSHIP: 'Fractional Ownership',
        HOME_EXCHANGE: 'Home Exchange',
        LODGE_OPERATOR: 'Lodge (operator of outdoor recreational activity)',
        EDUCATIONAL_INSTITUTION: 'Educational institution accommodation (Student or Employee) (off campus)',
        STRATA_GUEST_SUITE: 'Strata corporation guest suite'
      },
      docType: {
        BC_DRIVERS_LICENCE: "BC Driver's Licence",
        PROPERTY_ASSESSMENT_NOTICE: 'Property Assessment Notice',
        SPEC_TAX_CONFIRMATION: 'Speculation and Vacancy Tax Confirmation',
        HOG_DECLARATION: 'Home Owner Grant declaration',
        ICBC_CERTIFICATE_OF_INSURANCE: 'ICBC Certificate of Insurance',
        HOME_INSURANCE_SUMMARY: 'Home Insurance Summary',
        PROPERTY_TAX_NOTICE: 'Property Tax Notice',
        UTILITY_BILL: 'Utility Bill',
        GOVT_OR_CROWN_CORP_OFFICIAL_NOTICE: 'Government or Crown Corporation Official Notice',
        TENANCY_AGREEMENT: 'Tenancy Agreement',
        RENT_RECEIPT_OR_BANK_STATEMENT: 'Rent Receipt or Bank Statement',
        LOCAL_GOVT_BUSINESS_LICENSE: 'Local Government Business License',
        OTHERS: 'Other Proof Document (subject to review by registry staff)',
        STRATA_HOTEL_DOCUMENTATION: 'Supporting strata-titled hotel or motel documentation',
        FRACTIONAL_OWNERSHIP_AGREEMENT: 'Fractional ownership agreement',
        BCSC: 'British Columbia Services Card',
        COMBINED_BCSC_LICENCE: 'Combined BC Driver’s Licence and Services Card'
      }
    }
  },
  strr: {
    section: {
      subTitle: {
        birthdate: 'Birthdate',
        businessName: 'Business Legal Name',
        completingParty: 'Completing Party',
        craBusinessNumber: 'Canada Revenue Agency (CRA) Business Number',
        craTaxNum: 'Canada Revenue Agency (CRA) Tax Number',
        emailAddress: 'Email Address',
        faxNumber: 'FaxNumber',
        individualName: "Individual's Name",
        individualPreferredName: "Individual's Preferred Name",
        mailingAddress: 'Mailing Address',
        phoneNumber: 'Phone Number',
        propertyAddress: 'Rental Unit Address',
        propertyDetails: 'Rental Unit Details',
        propertyListings: 'Online Listings',
        rentalUnitResiAddress: 'Rental Unit Residential Address',
        residentialAddress: 'Residential Address',
        role: 'Role'
      }
    },
    title: {
      application: 'Short-Term Rental Registration',
      comingSoon: 'Short-Term Rental Registry Coming Soon',
      dashboard: 'My Short-Term Rental Registry',
      default: 'TBD'
    },
    label: {
      addBusiness: 'Add a Business',
      addIndividual: 'Add a Individual',
      addListing: 'Add Another Listing',
      businessLicense: 'Business Licence Number',
      businessLicenseOpt: 'Local Government Business License (Optional)',
      businessLicenseDate: 'Business Licence Expiry Date',
      contactIndName: "Contact Individual's Name",
      individualsBusinesses: 'Individuals and Businesses',
      listingLinkOpt: 'Listing Link (Optional)',
      numberOfRooms: 'Number of Rooms for Rent',
      ownershipType: 'Ownership Type',
      nicknameOpt: 'Nickname (Optional)',
      parcelIdentifier: 'Parcel Identifier',
      parcelIdentifierOpt: 'Parcel Identifier (Optional)',
      propertyType: 'Property Type',
      role: {
        CO_HOST: 'Co-host',
        HOST: 'Property Host',
        PROPERTY_MANAGER: 'Property Manager',
        undefined: 'Not Selected'
      },
      room: 'Room | Rooms',
      own: 'Own',
      coown: 'Co-Own',
      rent: 'Rent',
      accessDwelling: 'Accessory Dwelling',
      bb: 'Bed & Breakfast',
      condoApt: 'Condo or Apartment',
      floatHome: 'Float Home',
      multiHousing: 'Multi Unit Housing',
      recreational: 'Recreational',
      secondarySuite: 'Secondary Suite',
      singleFamily: 'Single Family Home',
      strataHotel: 'Strata Hotel',
      townHome: 'Town Home',
      rentalUnit: 'Rental Unit',
      rentalUnitSetup: 'Rental Unit Set-up',
      rentalUnitName: 'Rental Unit Name',
      rentalUnitNameOpt: 'Rental Unit Name (Optional)',
      parcelId: 'Parcel Identifier (PID)',
      prRequirement: 'Principal Residence Requirement',
      theRentalUnitIs: 'The rental unit is:',
      supportingInfo: 'Supporting Information',
      other: 'Other',
      remove: 'Remove'
    },
    text: {
      applicationMustInclude: 'Your application must include the following:',
      businessContactIndividual: 'Enter the information for the individual to be contacted at this business.',
      comingSoon: 'Short-Term Rental Registry will be available on December 15, 2024',
      completingPartyInfo: 'Select this option if you are entering information for yourself.',
      completingPartyCheckbox: 'I am adding my own information',
      includeCompletingParty: 'The Completing Party',
      includeHost: 'At least one Host (maximum two)',
      includePropertyManager: 'If you have a Property Manager, you MUST also include the Property Manager (maximum one)',
      individualBusinessInfo: 'Enter business information for this individual if lorem ipsum...',
      rentalType: 'What type of space is offered in this rental unit?',
      entireHome: 'Entire home (guests have the entire place to themselves)',
      hostSameUnit: 'The host lives in this unit when it’s not being rented',
      hostDifferentUnit: 'The host lives in another unit on the same property',
      hostResidence: 'Is this rental unit on the same property as the property host’s principal residence?',
      hostUnit: 'Where does the property host live on the property?',
      listEachWebLink: 'Add the web link for the rental unit’s listing on a short-term rental platform (e.g., airbnb.ca/your_listing123). You can add multiple links if this rental unit is listed on multiple platforms (e.g., Airbnb, VRBO, Expedia, etc.).',
      ownershipTypeLegend: 'Required, What is the ownership type of the property?',
      enterResiAddressToDetermineRequirement: 'Start by entering the residential address of rental unit to help determine if you need to register your short-term rental and if it is in an area subject to the {link}.',
      requireBusLicense: 'Your local government requires a valid business licence to operate a short-term rental.'
    },
    word: {
      room: 'room | rooms',
      unit: 'unit | units'
    },
    hint: {
      businessLicense: 'This is the business licence to operate a short-term rental as provided by your local government.',
      craTaxNumber: '9-digit Social Insurance Number (SIN), Individual Tax Number (ITN), Temporary Tax Number (TTN)',
      listingLink: 'e.g., http://www.airbnb.ca/your_listing123',
      nickname: 'e.g., My Guest Suite',
      parcelIdentifier: 'This is a nine-digit number that identifies the parcel in the land title of your property.'
    },
    review: {
      brand: {
        name: 'Strata Hotel Brand Name | Strata Hotel Brand {count} Name',
        site: 'Strata Hotel Brand Website | Strata Hotel Brand {count} Website'
      }
    }
  },
  btn: {
    view: 'View',
    edit: 'Edit',
    done: 'Done',
    showDetails: 'Show Details',
    hideDetails: 'Hide Details'
  },
  error: {
    createAccount: {
      title: 'Error creating account',
      description: 'We could not create your account at this time. Please try again or if this issue persists, please contact us.'
    },
    reqFetch: {
      unknown: {
        title: 'An unexpected error occurred.',
        description: 'Please refresh the page or try again later. If error persists, please contact us.'
      },
      notFound: {
        title: 'Address could not be found. Make sure the address you have entered is correct. Check the {linkAllRules} to determine if you need to register. To continue to register, have the {linkReqDocs} ready.',
        description: 'Alternatively, you can refresh the page or try again later. If error persists, please contact us.'
      },
      500: {
        title: 'Internal Server Error.',
        description: 'Please refresh the page or try again later. If error persists, please contact us.'
      }
    } // TODO: other errors???
  },
  label: {
    hotelName: 'Hotel Name',
    expiryDate: 'Expiry Date',
    application: 'Application',
    registration: 'Registration',
    date: 'Date',
    accountName: 'Account Name',
    accountInfo: 'Account Information',
    primaryContactInfo: 'Primary Contact Information',
    expired: 'Expired',
    expiresToday: 'Expires today',
    dayCount: '0 days | 1 day | {count} days',
    lastStatusChange: 'Last Status Change',
    daysToExpiry: 'Days to Expiry (Pacific Time)',
    property: 'Property',
    details: 'Details',
    done: 'Done',
    strataRefCode: 'Strata-Titled Hotel Reference Code',
    eligibleStrataHotel: 'Eligible strata-titled hotel or motel',
    farmLandClass9: 'Farm land (BC Assessment Farm Class 9)',
    fractOwnership: 'Fractional ownership',
    strUnitName: 'Short-Term Rental Unit Name',
    strUnitNameOpt: 'Short-Term Rental Unit Name (Optional)',
    chooseDocs: 'Choose Supporting Documents',
    fileUpload: 'File Upload',
    localGovBL: 'Local Government Business Licence',
    localGovShortTermRentalBL: 'Local government short-term rental business licence',
    proofOfPr: 'Proof of principal residence',
    supportingStrataDocs: 'Supporting strata-titled hotel or motel documentation',
    fractOwnAgreement: 'Fractional ownership agreement',
    businessLicenceNumberOpt: 'Business Licence Number (Optional)',
    businessLicenceExpiryDateOpt: 'Business Licence Expiry Date (Optional)'
  },
  link: {
    learnMore: 'Learn More'
  },
  modal: {
    infoCollectionNotice: {
      triggerBtn: 'Information collection notice',
      title: 'Information Collection Notice',
      content: 'Any personal information required is collected to support the administration and enforcement of the {act}, under the authority of section 33(1) of that Act. Any questions about the collection of any information can be directed to the Executive Director of the Short-Term Rental Branch, at {link}.'
    },
    createAccount: {
      triggerBtn: 'Help with setting up an account',
      title: 'Need Help?',
      content: 'If you need help with setting up your BC Registries and Online Services account, please contact us.'
    }
  },
  table: {
    hostPmList: {
      title: '{boldStart}My Registration Applications{boldEnd} ({count})',
      emptyText: "You don't have any properties yet. Add a property above."
    }
  },
  hint: {
    strataRefCode: 'This is a unique code for each registered strata hotel. Ask the strata hotel management for this code.',
    docUpload: 'File must be a PDF. Maximum 10 MB.'
  },
  page: {
    dashboardList: {
      title: 'Dashboard - My Short-Term Rental Registry',
      h1: 'My CEU STR Registry Dashboard',
      subtitle: 'Register and keep short-term rental unit information up to date.'
    },
    chooseAccount: {
      title: 'Choose Account - My Short-Term Rental Registry',
      h1: 'Existing Account Found',
      existingAccountFoundAlert: '{boldStart}Note{boldEnd}: It looks like you already have an account with BC Registries and Online Services. You can use an existing account to proceed or create a new one.'
    }
  },
  validation: {
    accountName: {
      required: 'Please enter an account name',
      exists: 'An account with this name already exists'
    },
    businessLicense: 'Please enter a valid business license number',
    businessLicenseExpiryDate: 'Please select the expiry date for the business license',
    dateOfBirth: 'Please enter the birthdate of this individual',
    numberOfRooms: {
      empty: 'Please specify the number of rooms available for rent',
      invalidInput: 'Please enter a valid number of rooms (e.g., 5)'
    },
    ownershipType: 'Please select the ownership type of this rental unit',
    parcelIdentifier: 'The parcel identifier must be a nine-digit number',
    propertyType: 'Please select the property type of this rental unit',
    onlineListings: 'Please enter a valid URL (i.e. https://www.bcregistry.gov.bc.ca)',
    rentalUnitSetupType: 'Please select the setup type of the rental unit',
    typeOfSpace: 'Please select the type of space of the unit',
    ownerRole: 'Please select the role',
    missingReqDocs: 'Missing required documents. Please see above for details.',
    blExpiryDate: 'The expiry date must be greater than today and in less than 1 year.'
  },
  propertyType: {
    SECONDARY_SUITE: 'Secondary Suite',
    ACCESSORY_DWELLING: 'Accessory Dwelling',
    TOWN_HOME: 'Town Home',
    MULTI_UNIT_HOUSING: 'Multi Unit Housing',
    CONDO_OR_APT: 'Condo or Apartment',
    STRATA_HOTEL: 'Strata Hotel',
    SINGLE_FAMILY_HOME: 'Single Family Home',
    RECREATIONAL: 'Recreational',
    BED_AND_BREAKFAST: 'Bed & Breakfast',
    FLOAT_HOME: 'Float Home'
  },
  rentalUnitType: {
    ENTIRE_HOME: 'Entire home (guests have the entire place to themselves)',
    SHARED_ACCOMMODATION: 'Shared accommodation (guests rent a portion of the unit with access to common spaces that may be shared with the host or other guests)'
  },
  rentalUnitSetupType: {
    WHOLE_PRINCIPAL_RESIDENCE: "This unit is the host's principal residence", // The whole Host Principal Residence
    UNIT_ON_PR_PROPERTY: 'This unit is not the host’s principal residence but it’s on the same property', // A whole unit on the same property as the Host Principal Residence (e.g., basement suite)
    UNIT_NOT_ON_PR_PROPERTY: 'This unit is not on the same property as the host’s principal residence'
  },
  ownershipType: {
    RENT: 'Renter',
    OWN: 'Owner',
    CO_OWN: 'Co-owner',
    OTHER: 'Other'
  },
  tooltip: {
    pid: 'You can find your Parcel Identifier (PID) on your Property Assessment Notice from BC Assessment. Alternatively, visit the BC Assessment website, search for your civic address, and look for the PID under ‘Legal Description and Parcel ID’.'
  }
}