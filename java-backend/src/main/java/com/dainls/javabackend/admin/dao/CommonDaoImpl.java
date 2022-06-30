package com.dainls.javabackend.admin.dao;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;

@Repository("commonDao") @Primary
public class CommonDaoImpl implements iCommonDao{

    protected String result = "";

    @Override
    public List<HashMap<String, Object>> list(HashMap<String, Object> paramMap, String menuKeyword, String DaoKeyword) throws Exception {
        return null;
    }
}
