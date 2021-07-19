import { app } from "./app";
import { deleteCountryById } from "./endpoints/deleteCountryById";
import { editCountry } from "./endpoints/editCountry";
import { getAllCountries } from "./endpoints/getAllCountries";
import { getCountrybyID } from "./endpoints/getCountrybyID";
import { searchCountry } from "./endpoints/searchCountry";

app.get('/countries', getAllCountries)
app.get('/countries/search', searchCountry)
app.get('/countries/:id', getCountrybyID)
app.put('/countries/:id', editCountry)
app.delete('/countries/:id', deleteCountryById)