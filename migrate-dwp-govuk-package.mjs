#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const DEFAULT_PACKAGE = "@dwp-govuk/govuk-prototype-kit";
const DEFAULT_VERSION = "13.20.2";
const DEFAULT_PROJECT_ID = "82735932";

const args = new Set(process.argv.slice(2));
const write = args.has("--write");
const help = args.has("--help") || args.has("-h");

const cwd = process.cwd();
const packageName = process.env.DWP_GOVUK_PACKAGE_NAME || DEFAULT_PACKAGE;
const packageVersion = process.env.DWP_GOVUK_PACKAGE_VERSION || DEFAULT_VERSION;
const projectId = process.env.DWP_GOVUK_PACKAGE_PROJECT_ID || DEFAULT_PROJECT_ID;
const registry = `https://gitlab.com/api/v4/projects/${projectId}/packages/npm/`;
const tokenConfigKey = `//gitlab.com/api/v4/projects/${projectId}/packages/npm/:_authToken`;
const dependencyValue = `npm:${packageName}@${packageVersion}`;
const prebuildScript =
  `npm config set @dwp-govuk:registry ${registry} --location=project ` +
  `&& npm config set ${tokenConfigKey} $NPM_TOKEN --location=project`;

if (help) {
  console.log("Usage: node migrate-dwp-govuk-package.mjs [--write]");
  process.exit(0);
}

// (rest of script unchanged)
