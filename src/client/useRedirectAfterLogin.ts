"use client";

import { useRouter } from "next/navigation";
import { useRedirectParam } from "../shared/useRedirectParam";

export function useRedirectAfterLogin() {
	const router = useRouter();
	const redirect = useRedirectParam();

	return () => {
		router.push(redirect ?? "/");
		router.refresh();
	};
}
