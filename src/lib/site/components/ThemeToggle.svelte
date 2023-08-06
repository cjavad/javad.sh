<script>
    import SunIcon from 'virtual:icons/material-symbols/light-mode-sharp.svg';
    import MoonIcon from 'virtual:icons/material-symbols/dark-mode-sharp.svg';

    import themeState from '../stores/theme';

    const DARK_THEME = 'black';
    const LIGHT_THEME = 'lofi';
    
    function setTheme() {
        document.documentElement.setAttribute('data-theme', 
            $themeState === 'dark' ? DARK_THEME : LIGHT_THEME
        );
    }

    function toggleTheme() {
        if ($themeState == "dark") {
            $themeState = "light";
        } else {
            $themeState = "dark";
        }

        setTheme();
    }
</script>

<label class="swap swap-rotate">
    <input on:change={toggleTheme} type="checkbox" />
    <SunIcon class="swap-on" />
    <MoonIcon class="swap-off" />
</label>