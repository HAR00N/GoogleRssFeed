package com.dainls.javabackend.admin.dao;

import java.util.HashMap;
import java.util.List;

public interface iCommonDao {

    public List<HashMap<String, Object>> list(HashMap<String, Object> paramMap, String menuKeyword, String DaoKeyword) throws Exception;

}
