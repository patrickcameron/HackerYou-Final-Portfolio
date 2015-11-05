<?php $showPortfolioItems = new WP_Query( array(
	'post_type'=>'portfolio',
) ); ?>

<?php $showPortfolioImages = new WP_Query( array(
	'post_type'=>'portfolio',
) ); ?>

<?php if ( $showPortfolioItems->have_posts() ) : ?>

	<?php while ( $showPortfolioItems->have_posts() ) : $showPortfolioItems->the_post(); ?>
		<div class="section">
			<i class="fa fa-chevron-up"></i>
			<div class="slide">
				<?php echo get_the_post_thumbnail( $post->ID); ?>
					<h2><?php the_title(); ?></h2>
				<section class="entry-content">
								<p><?php the_content(); ?></p>
				</section><!-- .entry-content -->
				<?php while( has_sub_field('images') ): ?>
									<div class="slide">
										<?php $image = get_sub_field('image'); ?>
										<img class="screenshot" src="<?php echo $image['sizes']['medium'] ?>">
									</div>
				<?php endwhile; ?>
			</div>
			<i class="fa fa-chevron-down"></i>
		</div>

	<?php endwhile; ?>

		<?php wp_reset_postdata(); ?>

<?php else:  ?>
	
<?php endif; ?>


<!-- <div class="section">
  <div class="slide">slide 1</div>
  <div class="slide">slide 2</div>
  <div class="slide">slide 3</div>
</div> -->