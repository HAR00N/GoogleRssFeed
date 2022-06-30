package com.dainls.javabackend.admin.service.impl;

import com.dainls.javabackend.admin.service.inf.ITestService;
import org.springframework.stereotype.Service;

import java.util.HashMap;


@Service("TestService")
public class TestServiceImpl implements ITestService {
    @Override
    public HashMap<String, Object> list(String paramText, String menuKeyword) throws Exception {
        return null;
    }
}
