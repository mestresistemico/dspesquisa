package com.mestresistemico.dspesquisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mestresistemico.dspesquisa.entities.Record;

public interface RecordRepository extends JpaRepository<Record, Long> {

}
