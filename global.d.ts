import 'styled-components';

declare module 'styled-components' {
  export type Theme = {
    colors: {
      darkGrey: string;
      grey: string;
      blue: string;
      darkBlue: string;
      red: string;
    };
  }
}

declare global {
  type CarbonIntensity = {
    readonly loading?: boolean;
    readonly error?: boolean;
    readonly data?: {
      readonly from: string;
      readonly to: string;
      readonly generationmix: Array<{
        readonly fuel: string;
        readonly perc: number;
      }>;
    };
  }

  type State = {
    readonly carbonIntensity: CarbonIntensity;
  }
}
