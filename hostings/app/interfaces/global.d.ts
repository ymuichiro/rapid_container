declare namespace NodeJS {
  // 環境変数名の定義
  interface ProcessEnv {
    readonly NODE_ENV: "development" | "production" | "test";
    readonly NEXT_PUBLIC_PATH_INDEX: string;
    readonly NEXT_PUBLIC_PATH_TERMS: string;
    readonly NEXT_PUBLIC_PATH_PRIVACY: string;
    readonly NEXT_PUBLIC_PATH_HELP: string;
    readonly NEXT_PUBLIC_PATH_MYPAGE: string;
    readonly NEXT_PUBLIC_PATH_SIGNUP: string;
    readonly NEXT_PUBLIC_PATH_SIGNIN: string;
    readonly NEXT_PUBLIC_PATH_MODE_SELECT: string;
    readonly NEXT_PUBLIC_PATH_EDITER: string;
    readonly NEXT_PUBLIC_SITE_TITLE: string;
    readonly NEXT_PUBLIC_SITE_DESCRIPTION: string;
    readonly NEXT_PUBLIC_SITE_LOGO_URL: string;
    readonly NEXT_PUBLIC_APIKEY: string;
    readonly NEXT_PUBLIC_AUTH_DOMAIN: string;
    readonly NEXT_PUBLIC_PROJECT_ID: string;
    readonly NEXT_PUBLIC_STRAGE_BUCKET: string;
    readonly NEXT_PUBLIC_MESSAGING_SENDER_ID: string;
    readonly NEXT_PUBLIC_APP_ID: string;
    readonly NEXT_PUBLIC_MEASUREMENT_ID: string;
  }
}

/**
 * Firebase Database User Object
 */
declare interface UserData {
  lastName: string;
  firstName: string;
  organizeName: string;
  email: string;
  phone: string;
  industry: string;
  prefectures: string;
  capital: string;
  employeesCount: string;
  establishedYear: string;
}

/**
 * デバイスの種類を定義
 */
declare type DeviceType = "mobile" | "tablet" | "desktop";

/**
 * Basic component args
 */
declare interface BasicComponentArgs {
  className?: string;
  style?: CSSProperties;
}
