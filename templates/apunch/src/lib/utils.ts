export const format = <
  T extends Array<string | number | object | null | undefined>
>(
  delimiter: string,
  ...values: T
) => {
  return String(
    values.reduce(
      (result, value) =>
        String(result).replace(
          /(%|%d|%s)/,
          value !== null && value !== undefined ? value.toString() : ""
        ),
      delimiter
    )
  );
};
