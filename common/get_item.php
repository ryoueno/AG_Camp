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
<?php endif;?>