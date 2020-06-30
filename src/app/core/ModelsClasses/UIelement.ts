export interface UIElements {
    elementName : string,
    settings : settings
  }

  export  interface settings
  {
    title: string,
    url : string
  }

  export  class CompanyInfo
  {
    CompanyName: string;
    logoURL : string;
    OfficeAddres:Address;
    AlterNativeAddres:Address;
    Phone:string;
    Email:string;
  }

  export interface Address
  {
    Area :string;
    Pin :string;
    Mobile:string;
  }

