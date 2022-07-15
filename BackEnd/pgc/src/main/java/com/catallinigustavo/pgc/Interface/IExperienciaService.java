package com.catallinigustavo.pgc.Interface;

import com.catallinigustavo.pgc.Entity.Experiencia;
import java.util.List;

public interface IExperienciaService {
    // Traer una Experiencia
    public List<Experiencia> getExperiencia();
    // Guardar una Experiencia
    public void saveExperiencia(Experiencia experiencia);
    // Eliminar una Experiencia por ID
    public void deletExperiencia(Long id);
    // Buscar una Experiencia por ID
    public Experiencia findExperiencia(Long id);
}
