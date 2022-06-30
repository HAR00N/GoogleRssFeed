package com.dainls.javabackend.admin.controller;

import com.dainls.javabackend.admin.service.inf.ITestService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@RequestMapping(value = "/")
@RestController
public class testController {

    private final ITestService testService;

    HashMap<String, Object> param = new HashMap<>();

    public testController(ITestService testService) {
        this.testService = testService;
    }

    @PostMapping(value = "list")
    public HashMap<String, Object> connTestList () throws Exception {
        param = testService.list(null, "test");
        return param;
    }
}
