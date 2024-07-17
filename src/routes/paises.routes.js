import { Router } from "express";
import { createPais, deletePais, getPaises, updatePais, getPais } from "../controllers/pais.controllers.js";

const router = Router();

router.get('/pais', getPaises);

router.get('/pais/:id', getPais);

router.post('/pais', createPais);

router.put('/pais/:id', updatePais); 

router.delete('/pais/:id', deletePais);


export default router;