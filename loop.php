<?php $showPortfolioItems = new WP_Query( array(
	'post_type'=>'portfolio',
) ); ?>

<?php if ( $showPortfolioItems->have_posts() ) : ?>

	<?php while ( $showPortfolioItems->have_posts() ) : $showPortfolioItems->the_post(); ?>
		<div class="section">
			<div class="slide">
				<div class="projectWrapper">
					<?php echo get_the_post_thumbnail( $post->ID); ?>
					<div class="projectInfo displayFlex">
						<h2><?php the_title(); ?></h2>
						<a href="<?php the_field('siteurl'); ?>" target="_blank"><i class="fa fa-external-link"></i><p class="url"><?php the_field('siteurl'); ?></p></a>
						<section class="entry-content">
										<?php the_content(); ?>
										<div class="skills">
											<?php while( has_sub_field('skills') ): ?>
												<?php $skills = get_sub_field('skill'); ?>
												<p class="skill"><?php echo $skills ?> </p>
											<?php endwhile; ?>
										</div>
						</section><!-- .entry-content -->
					</div>
					<div class="projectImage">
						<?php while( has_sub_field('images') ): ?>
							<?php $image = get_sub_field('image'); ?>
							<a class="hoverLink" href="<?php the_field('siteurl'); ?>" target="_blank"><div class="rightArrow"><i class="fa fa-angle-right"></i></div></a>
							<div class="imageContainer">
								<img class="screenshot screenshotSmall" src="<?php echo $image['sizes']['large'] ?>">
							</div>
						<?php endwhile; ?>
					</div>
				</div>
			</div>
		</div>

	<?php endwhile; ?>

		<?php wp_reset_postdata(); ?>

<?php else:  ?>
	
<?php endif; ?>