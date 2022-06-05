package com.catallinigustavo.pgc.Interface;

import com.catallinigustavo.pgc.Entity.Usuario;
import java.util.List;


public interface IUsuarioService {
    // Traer un Usuario
    public List<Usuario> getUsuario();
    // Guardar un Usuario
    public void saveUsuario(Usuario usuario);
    // Eliminar un Usuario por ID
    public void deletUsuario(Long id);
    // Buscar un Usuario por ID
    public Usuario findUsuario(Long id);
    
}
