<?php

include ("Connect.php");
session_start();
session_destroy();
header("location: ./../html/pelis.html");