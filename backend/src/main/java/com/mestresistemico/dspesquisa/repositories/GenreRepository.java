package com.mestresistemico.dspesquisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mestresistemico.dspesquisa.entities.Genre;

public interface GenreRepository extends JpaRepository<Genre, Long> {

}
