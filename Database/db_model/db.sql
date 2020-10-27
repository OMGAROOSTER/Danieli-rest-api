CREATE DATABASE danieliProgetto

CREATE TABLE  tipiAcciaio{
    id SERIAL PRIMARY KEY,
    descrizione TEXT,
    nonProducibilie  boolean
};
CREATE TABLE colate{
    id SERIAL PRIMARY KEY,
    pesoProducibile  INT,
    ordinamento VARCHAR(128),
    statoColata boolean,
    oraInizio TIMESTAMP,
    oraFine TIMESTAMP
};
CREATE TABLE  prodotti{
    id SERIAL PRIMARY KEY,
    peso INT,
    lunghezza INT,
    sezione VARCHAR(128),
    inizioProduzione TIMESTAMP,
    fineProduzione TIMESTAMP
}
