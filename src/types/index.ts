export type CarbonIntensity = {
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

export type State = {
  readonly carbonIntensity: CarbonIntensity;
}
