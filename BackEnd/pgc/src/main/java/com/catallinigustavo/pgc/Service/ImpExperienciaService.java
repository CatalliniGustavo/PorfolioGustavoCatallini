package com.catallinigustavo.pgc.Service;

import com.catallinigustavo.pgc.Entity.Experiencia;
import com.catallinigustavo.pgc.Repository.IExperienciaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.catallinigustavo.pgc.Interface.IExperienciaService;

@Service
public class ImpExperienciaService implements IExperienciaService {
    
    @Autowired
    IExperienciaRepository iExperienciaRepository;
    
    @Override
    public List<Experiencia> getExperiencia() {
        List<Experiencia> experiencia = iExperienciaRepository.findAll();
        return experiencia;
    }
    
    @Override
    public void saveExperiencia(Experiencia experiencia) {
        iExperienciaRepository.save(experiencia);
    }
    
    @Override
    public void deletExperiencia(Long id) {
        iExperienciaRepository.deleteById(id);
    }
    
    @Override
    public Experiencia findExperiencia(Long id) {
        Experiencia experiencia = iExperienciaRepository.findById(id).orElse(null);
        return experiencia;
    }
    
}
