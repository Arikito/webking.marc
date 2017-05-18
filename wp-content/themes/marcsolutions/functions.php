<?php
/**
 * marcsolutions functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package marcsolutions
 */

if ( ! current_user_can( 'manage_options' ) ) {
	show_admin_bar( false );
}

/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function marcsolutions_setup() {
	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on marcsolutions, use a find and replace
	 * to change 'marcsolutions' to the name of your theme in all the template files.
	 */
	load_theme_textdomain( 'marcsolutions' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	 */
	add_theme_support( 'post-thumbnails' );

	add_image_size( 'marcsolutions-featured-image', 2000, 1200, true );

	add_image_size( 'marcsolutions-thumbnail-avatar', 100, 100, true );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus( array(
		'menu-1' => esc_html__( 'Header', 'marcsolutions' ),
		'products_menu' => esc_html__( 'Footer products', 'marcsolutions' ),
		'services_menu' => esc_html__( 'Footer services', 'marcsolutions' ),
		'about_us_menu' => esc_html__( 'Footer about us', 'marcsolutions' ),
		'socials' => esc_html__( 'Footer socials', 'marcsolutions' ),
	) );

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	) );

	/*
	 * Enable support for Post Formats.
	 *
	 * See: https://codex.wordpress.org/Post_Formats
	 */
	add_theme_support( 'post-formats', array(
		'aside',
		'image',
		'video',
		'quote',
		'link',
		'gallery',
		'audio',
	) );
	// Add theme support for selective refresh for widgets.
	add_theme_support( 'customize-selective-refresh-widgets' );
}

add_action( 'after_setup_theme', 'marcsolutions_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function marcsolutions_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'marcsolutions_content_width', 640 );
}
add_action( 'after_setup_theme', 'marcsolutions_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function marcsolutions_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'marcsolutions' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', 'marcsolutions' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
	register_sidebar( array(
		'name'          => esc_html__( 'Our clients slider', 'marcsolutions' ),
		'id'            => 'our-clients',
		'description'   => esc_html__( 'Add carousel here.', 'marcsolutions' ),
		'before_widget' => '<div id="%1$s" class="container widget %2$s">',
		'after_widget'  => '</div>',
		'before_title'  => '<h3 class="clients__title widget-title">',
		'after_title'   => '</h3>',
	) );
}
add_action( 'widgets_init', 'marcsolutions_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function marcsolutions_scripts() {
	wp_enqueue_style( 'aos-styles', 'https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.css' );
	wp_enqueue_script( 'aos-js', 'https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.js', array(), false, true );


	wp_enqueue_style( 'bootstrap-styles', get_template_directory_uri().'/assets/bootstrap/css/bootstrap.min.css' );
	wp_enqueue_script( 'bootstrap-js', get_template_directory_uri().'/assets/bootstrap/js/bootstrap.min.js', array( 'jquery' ), false, true );

	wp_enqueue_style( 'icon-font', get_template_directory_uri().'/assets/icomoon/style.css' );
	wp_enqueue_script( 'icons-ligatures', get_template_directory_uri().'/assets/icomoon/liga.js', array( 'jquery' ), false, true );

	wp_enqueue_script( 'custom-js', get_template_directory_uri().'/js/main.min.js', array( 'jquery' ), false, true );

	wp_enqueue_script( 'svg-icons-js', get_template_directory_uri().'/js/svg-icons.min.js', array( ), false, true );

	wp_enqueue_script( 'animate-js', get_template_directory_uri().'/js/animate.min.js', array( ), false, true );

	wp_enqueue_style( 'marcsolutions-style', get_stylesheet_uri() );
	wp_enqueue_script( 'marcsolutions-navigation', get_template_directory_uri() . '/js/navigation.min.js', array(), false, true );
	wp_enqueue_script( 'marcsolutions-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.min.js', array(), false, true );


	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'marcsolutions_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require get_template_directory() . '/inc/extras.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
require get_template_directory() . '/inc/jetpack.php';


function do_excerpt($string, $word_limit) {
	$words = explode(' ', $string, ($word_limit + 1));
	if (count($words) > $word_limit)
	array_pop($words);
	echo implode(' ', $words).' ...';
}

function getPostViews($postID){
    $count_key = 'post_views_count';
    $count = get_post_meta($postID, $count_key, true);
    if($count==''){
        delete_post_meta($postID, $count_key);
        add_post_meta($postID, $count_key, '0');
        return "0";
    }
    return $count;
}
function setPostViews($postID) {
    $count_key = 'post_views_count';
    $count = get_post_meta($postID, $count_key, true);
    if($count==''){
        $count = 0;
        delete_post_meta($postID, $count_key);
        add_post_meta($postID, $count_key, '0');
    }else{
        $count++;
        update_post_meta($postID, $count_key, $count);
    }
}