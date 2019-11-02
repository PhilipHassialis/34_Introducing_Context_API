import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlined from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles/FormStyles";
import { LanguageContext } from "./contexts/LanguageContext";

const words = {
    english: {
        email: "Email",
        password: "Password",
        signIn: "Sign In",
        remember: "Remember Me"
    },
    french: {
        email: "Adresse Electronique",
        password: "Mot de passe",
        signIn: "Se Connecter",
        remember: "Souviens-toi de Moi"
    },
    greek: {
        email: "Διεύθυνση Ηλεκτρονικού Ταχυδρομείου",
        password: "Κωδικός",
        signIn: "Είσοδος",
        remember: "Διατήρηση σύνδεσης"
    }
};

class Form extends Component {
    static contextType = LanguageContext;

    render() {
        const { classes } = this.props;
        const { language, changeLanguage } = this.context;
        const { email, password, signIn, remember } = words[language];
        return (
            <main className={classes.main}>
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlined></LockOutlined>
                    </Avatar>
                    <Typography variant="h5">{signIn}</Typography>
                    <Select value={language} onChange={changeLanguage}>
                        <MenuItem value="english">English</MenuItem>
                        <MenuItem value="french">French</MenuItem>
                        <MenuItem value="greek">Greek</MenuItem>
                    </Select>
                    <form className={classes.form}>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">{email}</InputLabel>
                            <Input id="email" name="email" autoFocus></Input>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">{password}</InputLabel>
                            <Input id="password" name="password" type="password"></Input>
                        </FormControl>
                        <FormControlLabel control={<Checkbox color="primary" />} label={remember} />
                        <Button variant="contained" type="submit" fullWidth color="primary" className={classes.submit}>
                            {signIn}
                        </Button>
                    </form>
                </Paper>
            </main>
        );
    }
}

export default withStyles(styles)(Form);
