import * as dotenv from 'dotenv';
import ms, { StringValue } from 'ms';

dotenv.config();

export const IS_DEV = process.env.NODE_ENV === 'development';
export const IS_PROD = process.env.NODE_ENV === 'production';

export function parseBoolean(value: string): boolean {
  if (typeof value === 'boolean') {
    return value;
  }

  if (typeof value === 'string') {
    const lowerValue = value.trim().toLowerCase();
    if (lowerValue == 'true') {
      return true;
    } else if (lowerValue == 'false') {
      return false;
    }
  }
  throw Error(`PARSE_ERROR: can't parse this value (${value})`);
}

export function ums(value: StringValue) {
  return ms(value);
}
