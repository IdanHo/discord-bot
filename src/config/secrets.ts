/*
 * Copyright (c) 2021, the SerenityOS developers.
 *
 * SPDX-License-Identifier: BSD-2-Clause
 */

import dotenv from "dotenv";

dotenv.config({ path: ".env" });

export const DISCORD_TOKEN = process.env["discord_token"];
export const GITHUB_TOKEN = process.env["github_token"];
export let GUILD_ID = process.env["guild_id"];
export let QUOTE_ROLE_ID = process.env["quote_role_id"];

if (!DISCORD_TOKEN) {
    console.error("No 'discord_token' provided in .env file.");
}
if (!GITHUB_TOKEN) {
    console.error(
        "No 'github_token' provided in .env file, the rate limit will be greatly reduced!"
    );
}
if (!GUILD_ID) {
    console.warn("No 'guild_id' provided in .env file, using id of the SerenityOS guild.");

    GUILD_ID = "830522505605283862";
}
if (!QUOTE_ROLE_ID) {
    console.warn(
        "No 'quote_role_id' provided in .env file, using id of the SerenityOS reviewer role."
    );

    QUOTE_ROLE_ID = "830720377025986561";
}
