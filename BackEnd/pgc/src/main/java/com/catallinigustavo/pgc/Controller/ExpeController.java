package com.catallinigustavo.pgc.Controller;

import com.catallinigustavo.pgc.Entity.Experiencia;
import com.catallinigustavo.pgc.Interface.IExperienciaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
public class ExpeController {
    
    @Autowired
    IExperienciaService iExperienciaService;
    
    @GetMapping("experiencia/traer")
    public List<Experiencia> getExperiencia(){
        return iExperienciaService.getExperiencia();
    }
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/experiencia/crear")
    public String crearExperiencia(@RequestBody Experiencia experiencia){
        iExperienciaService.saveExperiencia(experiencia);
        return "La experiencia fue guardada";
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/experiencia/borrar/{id}")
    public String deletExperincia(@PathVariable Long id) {
        iExperienciaService.deletExperiencia(id);
        return "La Experiencia fué eliminada correctamente";
    }
}
