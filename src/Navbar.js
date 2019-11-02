import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Iconbutton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/NavBarStyles";
import { ThemeContext } from "./contexts/ThemeContext";
import { withLanguageContext } from "./contexts/LanguageContext";

const content = {
    english: {
        search: "Search",
        flag: "👨‍🔬"
    },
    french: {
        search: "Sercher",
        flag: "🥐"
    },
    greek: {
        search: "Αναζήτηση",
        flag: "🥗"
    }
};

class Navbar extends Component {
    static contextType = ThemeContext;

    render() {
        const { isDarkMode, toggleTheme } = this.context;
        const { classes } = this.props;
        const { language } = this.props.languageContext;
        const { search, flag } = content[language];
        return (
            <div className={classes.root}>
                <AppBar position="static" color={isDarkMode ? "default" : "primary"}>
                    <Toolbar>
                        <Iconbutton className={classes.menuButton} color="inherit">
                            <span role="img" aria-label="French flag">
                                {flag}
                            </span>
                        </Iconbutton>
                        <Typography className={classes.title} variant="h6" color="inherit">
                            App Title {language}
                        </Typography>
                        <Switch onChange={toggleTheme} />
                        <div className={classes.grow}></div>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder={`${search}...`}
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput
                                }}
                            />
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

// export default withStyles(styles, Navbar)
export default withLanguageContext(withStyles(styles)(Navbar));
