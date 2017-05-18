<?php

/**

 * The template for displaying all pages

 *

 * This is the template that displays all pages by default.

 * Please note that this is the WordPress construct of pages

 * and that other 'pages' on your WordPress site may use a

 * different template.

 *

 * @link https://codex.wordpress.org/Template_Hierarchy

 *

 * @package marcsolutions

 */



get_header();

global $post;

$post_slug = $post->post_name; ?>



	<section class="image-page-header image-page-header_<?php echo $post_slug; ?> container-fluid">

		<div class="row">

			<?php the_title( '<h1 class="image-page-header__title">', '</h1>' )?>
			<?php if(get_post_meta(get_the_ID(), 'page_description', true)) : ?>
				<div class="image-page-header__subtitle"><?php echo get_post_meta(get_the_ID(), 'page_description', true); ?></div>
			<?php endif; ?>

		</div>

	</section>

	<div id="primary" class="content-area product-page">

		<main id="main" class="site-main" role="main">
			<section class="benefits">
				<p class="products__description section-description">Risk Execution Monitor: analyses potential actual occurrence of SoD and Critical actions on user level and drill-down to details like transaction, user and when transactions were potentially executed.</p>
				<div class="section-separator"></div>

				<div class="benefits__list snake">

					<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">

						<div class="benefits__item-number snake__number">1</div>

						<div class="benefits__item-content" data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-once="true">

							<div class="benefits__item-icon svg-icon" data-icon="share">

								<img src="<?php echo get_template_directory_uri(); ?>/assets/images/rem_rer.png" alt="" />

							</div>

							<div class="benefits__item-info">

								<div class="benefits__item-title">Risk Execution Report</div>

								<div class="benefits__item-description">

									<p>Analyses risks potentially executed by users in connected SAP systems.</p>

									<ul>

										<li>selected SoD risks.</li>

										<li>Selected rules (tasks/functions)</li>

									</ul>

								</div>

							</div>

						</div>

					</div>

					<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">

						<div class="benefits__item-number snake__number">2</div>

						<div class="benefits__item-content" data-aos="fade-right" data-aos-anchor-placement="center-bottom" data-aos-once="true">

							<div class="benefits__item-icon svg-icon" data-icon="filter">

								<img src="<?php echo get_template_directory_uri(); ?>/assets/images/rem_ds.png" alt="" />

							</div>

							<div class="benefits__item-info">

								<div class="benefits__item-title">Define Scope</div>

								<div class="benefits__item-description">

									<p>Unlike other traditional solutions which dump all the information on SoD risk, REM can be configured in such a way that transaction usage records are viewed only for </p>

									<ul>

										<li>Selected SoD risks.</li>

										<li>Selected rules (tasks/functions).</li>

									</ul>

								</div>

							</div>

						</div>

					</div>

					<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">

						<div class="benefits__item-number snake__number">3</div>

						<div class="benefits__item-content" data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-once="true">

							<div class="benefits__item-icon svg-icon" data-icon="time">

								<img src="<?php echo get_template_directory_uri(); ?>/assets/images/rem_ds2.png" alt="" />

							</div>

							<div class="benefits__item-info">

								<div class="benefits__item-title">HISOTORIAL INFO</div>

								<div class="benefits__item-description">

									<p>Transaction usage statistics are stored in REM on SoD risk level, rule level and individual transaction level, thus facilitating to drilldown for a historical period.</p>

									<ul>

										<li>Per risk.</li>

										<li>Per rule.</li>

										<li>Per transaction</li>

										<li>Per user</li>

									</ul>

								</div>

							</div>

						</div>

					</div>

					<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">

						<div class="benefits__item-number snake__number">4</div>

						<div class="benefits__item-content" data-aos="fade-right" data-aos-anchor-placement="center-bottom" data-aos-once="true">

							<div class="benefits__item-icon svg-icon" data-icon="puzzle">

								<img src="<?php echo get_template_directory_uri(); ?>/assets/images/rem_iwacm.png" alt="" />

							</div>

							<div class="benefits__item-info">

								<div class="benefits__item-title">Integration with ACM</div>

								<div class="benefits__item-description">

									<p>Access conflict Monitor shares risk, rule definition data to log the risk executed by users.</p>

									<ul>

										<li>No need to setting of critical, SoD relevant transactions again..</li>

										<li>Share risks executed , transactions executed with SoD results to understand SoD risks associated with user and risks executed by a user.</li>

									</ul>

								</div>

							</div>

						</div>

					</div>

					<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">

						<div class="benefits__item-number snake__number">5</div>

						<div class="benefits__item-content" data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-once="true">

							<div class="benefits__item-icon svg-icon" data-icon="board">

								<img src="<?php echo get_template_directory_uri(); ?>/assets/images/rem_dash.png" alt="" />

							</div>

							<div class="benefits__item-info">

								<div class="benefits__item-title">REM Dashboard</div>

								<div class="benefits__item-description">

									<p>Interactive drill-down dashboard to visualize SoD, critical risks executed.</p>

									<ul>

										<li>•	Risks potentially executed grouped by business process</li>

										<li>Transactions performed by a user.</li>

									</ul>

								</div>

							</div>

						</div>

					</div>

				</div>

			</section>

		</main><!-- #main -->

	</div><!-- #primary -->



<?php

get_sidebar();

get_footer();

