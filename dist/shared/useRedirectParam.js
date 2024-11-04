// src/shared/useRedirectParam.ts
import { useSearchParams } from "next/navigation";
function useRedirectParam() {
  const params = useSearchParams();
  return params?.get("redirect") ?? null;
}
export {
  useRedirectParam
};
