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
				<p class="products__description section-description">Privileged Access Management: grants temporary broad access for emergency situations to privileged ID’s for support teams in a controlled way. All the transactions used by these Privileged ID’s are tracked and reviewed.</p>
				<div class="section-separator"></div>

				<div class="benefits__list snake">

					<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">

						<div class="benefits__item-number snake__number">1</div>

						<div class="benefits__item-content" data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-once="true">

							<div class="benefits__item-icon svg-icon" data-icon="key">

								<img src="<?php echo get_template_directory_uri(); ?>/assets/images/pam_pa.png" alt="" />

							</div>

							<div class="benefits__item-info">

								<div class="benefits__item-title">Privilege Access</div>

								<div class="benefits__item-description">

									<p>Grant privileged access to support teams in a controlled way.</p>

									<ul>

										<li>Get rid of permanent assignment of super user roles to users in production systems.</li>

										<li>Instead grant privileged access on ‘need basis’ only</li>

									</ul>

								</div>

							</div>

						</div>

					</div>

					<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">

						<div class="benefits__item-number snake__number">2</div>

						<div class="benefits__item-content" data-aos="fade-right" data-aos-anchor-placement="center-bottom" data-aos-once="true">

							<div class="benefits__item-icon svg-icon" data-icon="settings">

								<img src="<?php echo get_template_directory_uri(); ?>/assets/images/pam_ec.png" alt="" />

							</div>

							<div class="benefits__item-info">

								<div class="benefits__item-title">Easy Configuration</div>

								<div class="benefits__item-description">

									<p>Easy and straight forward representation of the emergency access process.</p>

									<ul>

										<li>ID based configuration which is easy to understand and to configure</li>

										<li>Simple UI to manage privileged id accounts , reviewers, owners etc.</li>

									</ul>

								</div>

							</div>

						</div>

					</div>

					<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">

						<div class="benefits__item-number snake__number">3</div>

						<div class="benefits__item-content" data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-once="true">

							<div class="benefits__item-icon svg-icon" data-icon="chain">

								<img src="<?php echo get_template_directory_uri(); ?>/assets/images/pam_wf.png" alt="" />

							</div>

							<div class="benefits__item-info">

								<div class="benefits__item-title">Workflow</div>

								<div class="benefits__item-description">

									<p>Configurable workflow for privileged access management to define who approves the activation of privileged ID’s and who reviews the log of Privilege ID usage.</p>

									<ul>

										<li>Avoid manual follow-up activities to grant requests for privileged access: automated workflow does it for you.</li>

										<li>Complete audit trail reports help to analyse, investigate when privilege access was requested, approved and reviewed.</li>

									</ul>

								</div>

							</div>

						</div>

					</div>

					<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">

						<div class="benefits__item-number snake__number">4</div>

						<div class="benefits__item-content" data-aos="fade-right" data-aos-anchor-placement="center-bottom" data-aos-once="true">

							<div class="benefits__item-icon svg-icon" data-icon="mail">

								<img src="<?php echo get_template_directory_uri(); ?>/assets/images/pam_noty.png" alt="" />

							</div>

							<div class="benefits__item-info">

								<div class="benefits__item-title">Notification</div>

								<div class="benefits__item-description">

									<p>Configuration of notifications to Requesters, Owners and Reviewers:</p>

									<ul>

										<li>Notification to privileged access owner when there is any request entered</li>

										<li>Upon completion of privileged access usage: executed transaction details.</li>

									</ul>

								</div>

							</div>

						</div>

					</div>

					<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">

						<div class="benefits__item-number snake__number">5</div>

						<div class="benefits__item-content" data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-once="true">

							<div class="benefits__item-icon svg-icon" data-icon="zoom">

								<img src="<?php echo get_template_directory_uri(); ?>/assets/images/pam_rtacl.png" alt="" />

							</div>

							<div class="benefits__item-info">

								<div class="benefits__item-title">Review Transaction and Change Loge</div>

								<div class="benefits__item-description">

									<p>View transactions executed by privileged IDs in SAP systems.</p>

									<ul>

										<li>Analyse the respective change documents</li>

										<li>View SoD risks executed by a privileged ID within requested duration</li>

										<li>Usage of PAM review rules to have critical changes highlighted while reviewing  privileged access usage.</li>

									</ul>

								</div>

							</div>

						</div>

					</div>

					<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">

						<div class="benefits__item-number snake__number">6</div>

						<div class="benefits__item-content" data-aos="fade-right" data-aos-anchor-placement="center-bottom" data-aos-once="true">

							<div class="benefits__item-icon svg-icon" data-icon="chart">

								<img src="<?php echo get_template_directory_uri(); ?>/assets/images/pam_dash.png" alt="" />

							</div>

							<div class="benefits__item-info">

								<div class="benefits__item-title">Dashboards</div>

								<div class="benefits__item-description">

									<p>Interactive drill-down dashboard to visualize privileged access usage across connected SAP systems.</p>

									<ul>

										<li>Understand how many times privileged access check-out</li>

										<li>Overview of overall PAM requests for given duration i.e. requests approved, usage approved, rejected.</li>

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

