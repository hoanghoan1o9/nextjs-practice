interface IDropdown {
  key: string;
  option: string;
  value: string;
}

export namespace DROPDOWN {
  export const OPTION_DATA: IDropdown[] = [
    {
      key: 'none',
      option: 'Sort By',
      value: 'none',
    },
    {
      key: 'Title: A > Z',
      option: 'Title: A > Z',
      value: 'a-to-z',
    },
    {
      key: 'Title: Z > A',
      option: 'Title: Z > A',
      value: 'z-to-a',
    },
    {
      key: 'Price: Hightest > Lowest',
      option: 'Price: Hightest > Lowest',
      value: 'hightest-to-lowest',
    },
    {
      key: 'Price: Lowest > Hightest',
      option: 'Price: Lowest > Hightest',
      value: 'lowest-to-hightest',
    },
  ];

  export enum STYLES {
    NORMAL = 'dropdown--normal',
    LARGE = 'dropdown--large',
  }

  export enum SIZES {
    NORMAL = 'dropdown--normal',
    LARGE = 'dropdown--large',
  }

  export enum VALUES {
    NONE = 'none',
    A_TO_Z = 'a-to-z',
    Z_TO_A = 'z-to-a',
    HIGHTEST_TO_LOWEST = 'hightest-to-lowest',
    LOWEST_TO_HIGHEST = 'lowest-to-hightest',
  }
}
