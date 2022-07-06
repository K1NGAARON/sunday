add_filter( 'woocommerce_currencies', 'add_tsx_currency' );
function add_cw_currency( $cw_currency ) {
     $tsx_currency['SUNDAY'] = __( 'SUNDAY CURRECY', 'woocommerce' );
     return $tsx_currency;
}
add_filter('woocommerce_currency_symbol', 'add_tsx_currency_symbol', 10, 2);
function add_tsx_currency_symbol( $custom_currency_symbol, $custom_currency ) {
     switch( $custom_currency ) {
         case 'SUNDAY': $custom_currency_symbol = 'TSX$'; break;
     }
     return $custom_currency_symbol;
}


<!-- add_filter( 'woocommerce_currencies', 'add_cw_currency' );
function add_cw_currency( $cw_currency ) {
     $cw_currency['CLOUDWAYS'] = __( 'CLOUDWAYS CURRECY', 'woocommerce' );
     return $cw_currency;
}
add_filter('woocommerce_currency_symbol', 'add_cw_currency_symbol', 10, 2);
function add_cw_currency_symbol( $custom_currency_symbol, $custom_currency ) {
     switch( $custom_currency ) {
         case 'CLOUDWAYS': $custom_currency_symbol = 'CW$'; break;
     }
     return $custom_currency_symbol;
} -->