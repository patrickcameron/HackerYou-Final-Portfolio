<!-- head illustration by Magicon https://thenounproject.com/magicon/ -->

<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<?php // Load Meta ?>
  <meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php  wp_title('|', true, 'right'); ?></title>
  <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
  <link href='https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,900italic,900,700italic,700,500italic,500,400italic' rel='stylesheet' type='text/css'>
  <link href='https://fonts.googleapis.com/css?family=Cabin:400,700italic,700,600italic,600,500italic,500,400italic' rel='stylesheet' type='text/css'>
  
  <?php // Load our CSS ?>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
  <link rel="stylesheet" type="text/css" href="<?php bloginfo( 'stylesheet_url' ); ?>" />

  <?php wp_head(); ?>
</head>


<body <?php body_class(); ?>>

<div id="fullpage">

<div class="about displayNone">

  <?php $showAboutMe = new WP_Query( array(
    'post_type'=>'aboutme',
  ) ); ?>

    <?php if ( $showAboutMe->have_posts() ) : ?>

    <?php while ( $showAboutMe->have_posts() ) : $showAboutMe->the_post(); ?>

    <?php if (has_post_thumbnail()) { 
        $thumb_id = get_post_thumbnail_id(); $thumb_url = wp_get_attachment_image_src($thumb_id, large, true); 
        } else {
            $thumb_url = null;
        }
    ?>

    <img class="aboutPortrait" src="<?php echo $thumb_url[0]; ?>" alt="Portrait">

    <div class="aboutMeText">
        <?php the_content(); ?>
    </div>

    <?php endwhile; ?>

      <?php wp_reset_postdata(); ?>

  <?php else:  ?>
    
  <?php endif; ?>

 </div>

<div class="aboutButton"><p class="aboutText">about/CV</p></div>

  <div class="section header">
	<div class="headBrain">
		<img src="images/brain.png" class="brain" alt="Illustration of head">
		<img src="" class="gif" alt="Random animated GIF">
	</div>
	<h1>Patrick Cameron is a front end developer from Toronto</h1>
	<a class="projectsLink" href="#project1"><i class="fa fa-chevron-down"></i></a>
  </div><!--/.header-->
