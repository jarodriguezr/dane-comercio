export interface Preguntas {
    idPregunta:          number;
    idGrupo:             number;
    variable:            string;
    codPregunta:         null;
    descripcionPregunta: string;
    orden:               number;
    tipoPregunta:        number;
    idPreguntaPadre:     null;
    tipoInput:           string;
    activo:              number;
    tipoRespuesta:       null;
    tooltip:             string;
    selectInvocar:       SelectInvocar;
    validaciones:        Validaciones;
    opcionesRespuesta:   any[];
    opcionesUsuario:     string[];
    depende:             null;
}

export interface SelectInvocar {
    tipo:        null;
    parametros:  null;
    url:         string;
    path:        null;
    idSiguiente: null;
}

export interface Validaciones {
    requerido:          Max;
    max:                Max;
    min:                Max;
    pattern:            Max;
    idsRenderHabilitar: null;
    tipo:               null;
}

export interface Max {
    value:   boolean | number | null;
    message: null | string;
}