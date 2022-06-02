export default function useGlobalLogic() {
  return {
    clsxJoin: (...name: string[]): string => name.join(" "),
    clsxSwitch: (isTrue: string, isFalse: string, flag: boolean): string => (flag ? isTrue : isFalse),
    switchPhotoSize: (gPhotoUrl: string, isMobile: boolean): string => {
      return isMobile ? `${gPhotoUrl}=w600?authuser=0` : `${gPhotoUrl}=w1920?authuser=0`;
    },
  };
}
