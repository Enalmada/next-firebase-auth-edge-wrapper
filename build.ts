// bun types conflicts with dom types so just putting it where it is needed
/// <reference types="bun-types" />

import getExternalDependencies, {
	bunBuild,
	getSourceFiles,
	prependDirectiveToBuiltFiles,
	removeBadClientStringFromFiles,
} from "@enalmada/bun-externals";

async function buildWithExternals(): Promise<void> {
	const entrypoints = await getSourceFiles();

	// bunBuild handles build failure
	await bunBuild({
		entrypoints,
		outdir: "./dist",
		target: "node",
		external: ["*"],
		root: "./src",
	});

	// Temp fix for jsxDev
	// https://github.com/oven-sh/bun/issues/3768
	// https://github.com/oven-sh/bun/issues/7499
	const externalDeps = await getExternalDependencies();

	await bunBuild({
		entrypoints: ["./src/client/AuthProvider.tsx"],
		outdir: "./dist/client",
		target: "node",
		external: [...externalDeps, "./src/client/AuthProvider.tsx"],
		root: "./src/client",
	});

	await bunBuild({
		entrypoints: ["./src/client/useRedirectAfterLogin.ts"],
		outdir: "./dist/client",
		target: "node",
		external: [...externalDeps, "./src/client/useRedirectAfterLogin.ts"],
		root: "./src/client",
	});

	await bunBuild({
		entrypoints: ["./src/client/AuthContext.tsx"],
		outdir: "./dist/client",
		target: "node",
		external: [...externalDeps, "./src/client/AuthContext.tsx"],
		root: "./src/client",
	});

	// Update the built files in './dist/client' after the build completes.
	prependDirectiveToBuiltFiles("./src/client", "./dist/client");
	removeBadClientStringFromFiles("./dist");
}

void buildWithExternals();
