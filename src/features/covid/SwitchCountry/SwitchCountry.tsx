import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NativeSelect, FormControl } from "@material-ui/core";

import { useAppDispatch } from "../../../app/hooks";
import { fetchAsyncGetDaily } from "../covidSlice";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginBottom: theme.spacing(3),
    minwidth: 320,
  },
}));

const SwitchCountry: React.FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const countries = [
    "japan",
    "China",
    "us",
    "france",
    "italy",
    "spain",
    "united kingdom",
    "germany",
    "russia",
    "brazil",
    "taiwan",
    "thailand",
    "new zealand",
    "sweden",
    "india",
    "korea-south",
  ];

  return (
    <FormControl className={classes.formControl}>
      <NativeSelect
      // 国が選択されたらonChangeが実行される
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          dispatch(fetchAsyncGetDaily(e.target.value))
        }
      >
        // countriesの配列の内容を取り出し、選択肢をoptionで作成
        {countries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default SwitchCountry;
