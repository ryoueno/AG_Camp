<?php

    function connectDB()
    {
        $link = mysql_connect(
            'localhost',
            'root',
            'agdb123'
        );
        mysql_select_db('agdb');

        return $link;
    }
