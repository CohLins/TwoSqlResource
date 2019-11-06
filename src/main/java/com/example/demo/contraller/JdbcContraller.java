package com.example.demo.contraller;

import com.example.demo.bean.*;
import com.example.demo.dao.TbCameraMapper;
import com.example.demo.dao.TbHazarduserMapper;
import com.example.demo.dao.TbKeyuserMapper;
import com.example.demo.dao.TbUserMapper;
import com.example.demo.utils.E3Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import sun.rmi.server.InactiveGroupException;

import javax.servlet.http.HttpSession;
import javax.validation.constraints.Max;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

@Controller
public class JdbcContraller {

    @Autowired
    JdbcTemplate jdbcTemplate;
    @Autowired
    private TbUserMapper tbUserMapper;
    @Autowired
    TbCameraMapper tbCameraMapper;
    @Autowired
    TbHazarduserMapper tbHazarduserMapper;
    @Autowired
    TbKeyuserMapper tbKeyuserMapper;
    //查出用户数据，在页面展示
    @RequestMapping("/success")
    public String success(Map<String,Object> map){
        map.put("hello","<h1>你好</h1>");
        map.put("users", Arrays.asList("zhangsan","lisi","wangwu"));
        return "success";
    }

    @RequestMapping("/login")
    public String index(Map<String,Object> map,HttpSession session){
        map.put("user",54646);
        map.put("pwd",123456);
        session.setAttribute("username","123456");
        return "login";
    }

    @ResponseBody
    @GetMapping("/query")
    public Map<String,Object> map(){
        List<Map<String, Object>> maps = jdbcTemplate.queryForList("select * from tb_user");
        return maps.get(0);

    }

//    @GetMapping("/test")
//    public String mapMybatis(Map<String,Object> map){
//        TbUserExample example = new TbUserExample();
//        List<TbUser> maps = tbUserMapper.selectByExample(example);
//        map.put("users",maps);
//        return "test";
//    }

    @ResponseBody
    @GetMapping("/test2")
    public E3Result mapMybatis(String pageNo,String pageSize){
//       TbKeyuserExample tbKeyuserExample  =new TbKeyuserExample();
//        List<TbKeyuser> tbKeyusers = tbKeyuserMapper.selectByExample(tbKeyuserExample);
        TbHazarduserExample example  =new TbHazarduserExample();
        List<TbHazarduser> tbHazardusers = tbHazarduserMapper.selectByExample(example);


        List<Object> list = new ArrayList<>();
        UserTable userTable = new UserTable();
        userTable.setTotal(tbHazardusers.size());
        userTable.setLast((int)Math.round(tbHazardusers.size()/3+0.5));
        //添加三个对应数据
        if(Integer.valueOf(pageNo)<(int)Math.round(tbHazardusers.size()/3+0.5)){
            for (int i=0;i<3;i++){
                int num  =(Integer.valueOf(pageNo)*3-3+i);
                list.add(tbHazardusers.get(num));
            }
        }else {
            for (int i=Integer.valueOf(pageNo)*3-3;i<tbHazardusers.size();i++){
                //System.out.println(i);
                list.add(tbHazardusers.get(i));
            }
        }

        userTable.setData(list);
        return E3Result.ok(userTable);
    }
}
