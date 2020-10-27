const {
    Pool
} = require('pg')
const pool = new Pool({
    connectionString: process.env.PG_CONNECTION_STRING
})
pool.on('connect', () => {
    console.log('CONNECTED TO DB')
})
const getAcciaio = async (req, res) => {
    const response = await pool.query('SELECT * FROM tipiAccciaio ORDER BY id ASC', (err) => {
        if (err) {
            res.status(500).send("BAD  QUETY")
        }
        res.status(200).send("OK")
    })
}
const getAcciaioById = async (req, res) => {
    const id = parseInt(req.params.id)
    const response = await pool.query('SELECT * FROM tipiAccciaio WHERE id=$1', [id])
    res.json(response.rows)
}
const createAcciaio = async (req, res) => {
    const {
        descrizione,
        nonProducibilie
    } = req.params.body
    const response = await pool.query('INSERT INTO tipiAccciaio (descrizione, nonProducibile) VALUES ($1,$2)', [descrizione, nonProducibilie], (err) => {
        if (err) {
            res.status(500).send("BAD QUERY")
        }
        res.status(200).send("OK")
    })
}
const updateAcciaio = async (req, res) => {
    const id = parseInt(req.params.id)
    const {
        descrizione,
        nonProducibilie
    } = req.body
    const reponse = await pool.query('UPDATE tipiAccciaio SET descrizione =$1, nonProducibile=$2 WHERE id =$3', [
        descrizione,
        nonProducibilie,
        id
    ])
}
const deleteAcciaio = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM tipiAcciaio where id = $1', [
        id
    ]), (err) => {
        if (err) {
            res.json(`Acciaio ${id} deleted Successfully`);
        }
        res.status(200).send("OK")
    };

};
//COlata
const getColata = async (req, res) => {
    const response = await pool.query('SELECT * FROM colate ORDER BY id ASC', (err) => {
        if (err) {
            res.status(500).send("BAD  QUETY")
        }
        res.status(200).send("OK")
    })
}
const getColataByID = async (req, res) => {
    const id = parseInt(req.params.id)
    const response = await pool.query('SELECT * FROM colate WHERE id=$1', [id])
    res.json(response.rows)
}
const createColata = async (req, res) => {
    const {
        pesoProducibile,
        ordinamento,
        statoColata,
        oraInizio,
        oraFine
    } = req.params.body
    const response = await pool.query('INSERT INTO colate (pesoProducibile, oradinamento,statoColat,oraInizio,oraFine) VALUES ($1,$2,$3,$4,$5)', [pesoProducibile, ordinamento, statoColata, oraInizio, oraFine], (err) => {
        if (err) {
            res.status(500).send("BAD QUERY")
        }
        res.status(200).send("OK")
    })
}
const updateColata = async (req, res) => {
    const id = parseInt(req.params.id)
    const {
        pesoProducibile,
        ordinamento,
        statoColata,
        oraInizio,
        oraFine
    } = req.body
    const reponse = await pool.query('UPDATE colate SET pesoProducibile =$1, ordinamento=$2 ,statoColata=$3 ,oraInizio=$4 ,oraFine=$5 WHERE id =$6', [
        pesoProducibile,
        ordinamento,
        statoColata,
        oraInizio,
        oraFine,
        id
    ])
}
const deleteColata = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM colate where id = $1', [
        id
    ]), (err) => {
        if (err) {
            res.json(`colata ${id} deleted Successfully`);
        }
        res.status(200).send("OK")
    };

};
//Prodotto
const getProdotto = async (req, res) => {
    const response = await pool.query('SELECT * FROM prodotti ORDER BY id ASC', (err) => {
        if (err) {
            res.status(500).send("BAD  QUETY")
        }
        res.status(200).send("OK")
    })
}
const getProdottoById = async (req, res) => {
    const id = parseInt(req.params.id)
    const response = await pool.query('SELECT * FROM prodotti WHERE id=$1', [id])
    res.json(response.rows)
}
const createProdotto = async (req, res) => {
    const {
        peso,
        lunghezza,
        sezione,
        inizioProduzione,
        fneProduzione
    } = req.params.body
    const response = await pool.query('INSERT INTO prodotti (peso,lunghezza,sezione,inizioProduzione,fneProduzione) VALUES($1, $2, $3, $4, $5)',
        [
            peso,
            lunghezza,
            sezione,
            inizioProduzione,
            fneProduzione
        ],
        (err) => {
            if (err) {
                res.status(500).send("BAD QUERY")
            }
            res.status(200).send("OK")
        })
}
const updateProdotto = async (req, res) => {
    const id = parseInt(req.params.id)
    const {
        peso,
        lunghezza,
        sezione,
        inizioProduzione,
        fneProduzione
    } = req.body
    const reponse = await pool.query('UPDATE prodotti SET peso=$1,lunghezza=$2,sezione=$3,inizioProduzione=$4,fneProduzione=$5 WHERE id =$6', [
        peso,
        lunghezza,
        sezione,
        inizioProduzione,
        fneProduzione,
        id
    ])
}
const deleteProdotto = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM prodotti where id = $1', [
        id
    ]), (err) => {
        if (err) {
            res.json(`Prodotto ${id} deleted Successfully`);
        }
        res.status(200).send("OK")
    };

};

module.exports = {
    getAcciaio,
    getAcciaioById,
    createAcciaio,
    updateAcciaio,
    deleteAcciaio,
    
    getColata,
    getColataByID,
    createColata,
    updateColata,
    deleteColata,

    getProdotto,
    getProdottoById,
    createProdotto,
    updateProdotto,
    deleteProdotto
}
//lo so non e il massimo come ho organizzato la cosa ma lo rifaro in futuro se necessario era solo per prova 