import type { SvelteComponent } from "svelte";


import RustIcon from "virtual:icons/mdi/language-rust.svg";
import SvelteIcon from "virtual:icons/logos/svelte.svg";
import JavaScriptIcon from "virtual:icons/logos/javascript.svg";
import TypeScriptIcon from "virtual:icons/logos/typescript-icon.svg";
import CSSIcon from "virtual:icons/logos/css-3.svg";
import HTMLIcon from "virtual:icons/logos/html-5.svg";
import GitIcon from "virtual:icons/logos/git-icon.svg";
import GitHubIcon from "virtual:icons/logos/github-icon.svg";
import GitHubActionsIcon from "virtual:icons/logos/github-actions.svg";
import LinuxIcon from "virtual:icons/logos/linux-tux.svg";
import WindowsIcon from "virtual:icons/mdi/microsoft-windows.svg";
import MacOSIcon from "virtual:icons/simple-icons/macos.svg";
import PowerShellIcon from "virtual:icons/mdi/powershell.svg";


export enum Categories {
    COOL = "cool",
    TECH = "tech",
    RUST = "rust",
    SVELTE = "svelte",
    JAVASCRIPT = "javascript",
    TYPESCRIPT = "typescript",
    WEB = "web",
    CSS = "css",
    HTML = "html",
    GIT = "git",
    GITHUB = "github",
    GITHUB_ACTIONS = "github-actions",
    LINUX = "linux",
    WINDOWS = "windows",
    MACOS = "macos",
    POWERSHELL = "powershell",
};

// Enum to icon mapping
export const CategoryIcons: Record<Categories, any> = {
    [Categories.COOL]: undefined,
    [Categories.TECH]: undefined,
    [Categories.RUST]: RustIcon,
    [Categories.SVELTE]: SvelteIcon,
    [Categories.JAVASCRIPT]: JavaScriptIcon,
    [Categories.TYPESCRIPT]: TypeScriptIcon,
    [Categories.WEB]: undefined,
    [Categories.CSS]: CSSIcon,
    [Categories.HTML]: HTMLIcon,
    [Categories.GIT]: GitIcon,
    [Categories.GITHUB]: GitHubIcon,
    [Categories.GITHUB_ACTIONS]: GitHubActionsIcon,
    [Categories.LINUX]: LinuxIcon,
    [Categories.WINDOWS]: WindowsIcon,
    [Categories.MACOS]: MacOSIcon,
    [Categories.POWERSHELL]: PowerShellIcon,
};