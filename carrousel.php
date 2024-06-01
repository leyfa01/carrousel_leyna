<?php

/**
 * Plugin Name: Carrousel
 * Description: Carrousel d'image avec des contrôles.
 * Author: Leyna
 * Version: 1.0
 */



function carrousel_enqueue() {
$version_css = filemtime(plugin_dir_path( __FILE__ ) . "style.css");
$version_js = filemtime(plugin_dir_path(__FILE__) . "js/carrousel.js");
wp_enqueue_style(   'em_plugin_carrousel_css',
                     plugin_dir_url(__FILE__) . "style.css",
                     array(),
                     $version_css);

wp_enqueue_script(  'em_plugin_carrousel_js',
                    plugin_dir_url(__FILE__) ."js/carrousel.js",
                    array(),
                    $version_js,
                    true);
}
add_action('wp_enqueue_scripts', 'carrousel_enqueue');

function genere_html()
{
    /////////////////////////////////////// HTML
    // Le conteneur d'une boîte

    $contenu = '<div class="carrousel_WP">
                    <figure class="carrousel_figure">
                        <button class="carrousel_fermer">X</button>
                        <button type="button" class="fleche carrousel_precedent">➜</button>
                    <button type="button" class="fleche carrousel_suivant">➜</button>
                    </figure>
                    <form class="carrousel_form">
                        <div class="carrousel_radio"></div>
                    </form>
                    
                </div>';
    return $contenu;
}

add_shortcode("carrousel", "genere_html");
