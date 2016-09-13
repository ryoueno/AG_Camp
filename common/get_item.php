<?php

    //DBから全てのデータを取得しておく

    $db = connectDB();
    mysql_query('SET NAMES utf8');

    $sql = "SELECT * FROM categories";
    $result = mysql_query($sql);

 
    // $items = [];
    // while ($cat = mysql_fetch_array($result)) {
    //     $sql = "SELECT * FROM items WHERE category_id=".$cat['id'].";";
    //     $items[$cat['id']]['name']  = $cat['name'];
    //     $items[$cat['id']]['items'] = [];

    //     $items_data = mysql_query($sql);
    //     while ($data = mysql_fetch_array($items_data)) {
    //         $items[$cat['id']]['items'][$data['id']] = $data;
    //     }
    // }

    // $MAX_POP = 20;

    // $sql = "SELECT * FROM items ORDER BY views DESC, category_id, name ASC LIMIT ".$MAX_POP.";";
    // $result = mysql_query($sql);
    // $pop = [];
    // while ($item = mysql_fetch_array($result)) {
    //     $pop[] = $item;
    // }
?>

<?php if ($debug) : ?>
    <!-- Debug Mode -->
    <div id="acceleration">
        <h2>acceleration[m/s^2]</h2>
        <p>x: <span id="acc-x"></span></p>
        <p>y: <span id="acc-y"></span></p>
        <p>z: <span id="acc-z"></span></p>
    </div>

    <div id="location">
        <h2>geo location</h2>
        <p>緯度: <span id="latitude"></span></p>
        <p>経度: <span id="longitude"></span></p>
    </div>

    <audio id="sound-file" preload="auto">
        <!-- <source src="http://〜.mp3" type="audio/mp3"> -->
        <source src="/sound/test.wav" type="audio/wav" autostart="true">
    </audio>
    <input type="button" value="再生" onclick="start()">
<?php endif;?>