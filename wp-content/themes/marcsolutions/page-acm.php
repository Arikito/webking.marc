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
				<p class="products__description section-description">Nullam sit amet odio eu est aliquet euismod a a urna. Nullam sit amet odio eu</p>
				<div class="section-separator"></div>

				<div class="benefits__list snake">

					<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">

						<div class="benefits__item-number snake__number">1</div>

						<div class="benefits__item-content" data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-once="true">

							<div class="benefits__item-icon svg-icon" data-icon="radar">

								<img src="<?php echo get_template_directory_uri(); ?>/assets/images/acm_aim.png" alt="" />

							</div>

							<div class="benefits__item-info">

								<div class="benefits__item-title">Online Risk Analysis</div>

								<div class="benefits__item-description">

									<p>Find and remediate SoD conflict and critical access violations. Analyze at the lowest authorization level</p>

									<ul>

										<li>Connect multiple SAP systems to ACM and perform online Risk Analysis to real-time reports.</li>

										<li>Prepare SoD, Critical access reports at User and Role level and publish</li>

									</ul>

								</div>

							</div>

						</div>

					</div>

					<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">

						<div class="benefits__item-number snake__number">2</div>

						<div class="benefits__item-content" data-aos="fade-right" data-aos-anchor-placement="center-bottom" data-aos-once="true">

							<div class="benefits__item-icon svg-icon" data-icon="user">

								<img src="<?php echo get_template_directory_uri(); ?>/assets/images/acm_simulation.png" alt="" />

							</div>

							<div class="benefits__item-info">

								<div class="benefits__item-title">Simulation</div>

								<div class="benefits__item-description">

									<p>Perform risk analysis simulation before applying changes on user authorizations</p>

									<ul>

										<li>Avoid introducing new SoD risk in SAP system by performing risk simulation</li>

										<li>Works as a preventive control.</li>

									</ul>

								</div>

							</div>

						</div>

					</div>

					<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">

						<div class="benefits__item-number snake__number">3</div>

						<div class="benefits__item-content" data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-once="true">

							<div class="benefits__item-icon svg-icon" data-icon="network">

								<img src="<?php echo get_template_directory_uri(); ?>/assets/images/acm_csa.png" alt="" />

							</div>

							<div class="benefits__item-info">

								<div class="benefits__item-title">Cross System Analysis</div>

								<div class="benefits__item-description">

									<p>Perform the risk analysis to view the user risk spread across the systems.

										Example : Shopping Cart Create (SRM) / PO Approval (ECC)</p>

									<ul>

										<li>Authorizations are distributed to several systems, example R/3 & SRM</li>

										<li>ACM helps to find the risks associated a user ID that spread across systems.</li>

									</ul>

								</div>

							</div>

						</div>

					</div>

					<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">

						<div class="benefits__item-number snake__number">4</div>

						<div class="benefits__item-content" data-aos="fade-right" data-aos-anchor-placement="center-bottom" data-aos-once="true">

							<div class="benefits__item-icon svg-icon" data-icon="planet">

								<img src="<?php echo get_template_directory_uri(); ?>/assets/images/acm_ola.png" alt="" />

							</div>

							<div class="benefits__item-info">

								<div class="benefits__item-title">Org Level Analysis</div>

								<div class="benefits__item-description">

									<p>Perform Risk Analysis on Organizational Level.</p>

									<ul>

										<li>Organizational rule analysis can be enabled to avoid false positives.</li>

										<li>Flexible option of Mass upload, import of organizational rules in to ACM via excel.</li>

									</ul>

								</div>

							</div>

						</div>

					</div>

					<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">

						<div class="benefits__item-number snake__number">5</div>

						<div class="benefits__item-content" data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-once="true">

							<div class="benefits__item-icon svg-icon" data-icon="book">

								<img src="<?php echo get_template_directory_uri(); ?>/assets/images/acm_crb.png" alt="" />

							</div>

							<div class="benefits__item-info">

								<div class="benefits__item-title">Central Rule Book</div>

								<div class="benefits__item-description">

									<p>Master data for ACM are risk defenitions and are input for running risk analysis.</p>

									<ul>

										<li>Define SoD Conflict risks, Critical access risks in rulebook</li>

										<li>Best practice Rulebook has been incorporated.</li>

									</ul>

								</div>

							</div>

						</div>

					</div>

					<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">

						<div class="benefits__item-number snake__number">6</div>

						<div class="benefits__item-content" data-aos="fade-right" data-aos-anchor-placement="center-bottom" data-aos-once="true">

							<div class="benefits__item-icon svg-icon" data-icon="exchange">

								<img src="<?php echo get_template_directory_uri(); ?>/assets/images/acm_rc.png" alt="" />

							</div>

							<div class="benefits__item-info">

								<div class="benefits__item-title">Ruleset Converters</div>

								<div class="benefits__item-description">

									<p>Use the inbuilt conversion programs to translate third party rule sets in to ACM format.</p>

									<ul>

										<li>Upload the other rule sets and convert them easily in to MARC format</li>

										<li>Avoid manual creation of rule sets which can lead to errors, false positives, negatives.</li>

									</ul>

								</div>

							</div>

						</div>

					</div>

					<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">

						<div class="benefits__item-number snake__number">7</div>

						<div class="benefits__item-content" data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-once="true">

							<div class="benefits__item-icon svg-icon" data-icon="notebook">

								<img src="<?php echo get_template_directory_uri(); ?>/assets/images/acm_oa.png" alt="" />

							</div>

							<div class="benefits__item-info">

								<div class="benefits__item-title">Offline analysis</div>

								<div class="benefits__item-description">

									<p>Enables to perform the risk analysis by uploading the SAP authorization data.</p>

									<ul>

										<li>If the there is SAP integration to MARC not possible due to lower versions, in that case client can use the offline analysis option.</li>

										<li>Extract the data by using the MARC : Data Extractorto a Access File and upload to ACM.</li>

									</ul>

								</div>

							</div>

						</div>

					</div>

					<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">

						<div class="benefits__item-number snake__number">8</div>

						<div class="benefits__item-content" data-aos="fade-right" data-aos-anchor-placement="center-bottom" data-aos-once="true">

							<div class="benefits__item-icon svg-icon" data-icon="window">

								<img src="<?php echo get_template_directory_uri(); ?>/assets/images/acm_iwc.png" alt="" />

							</div>

							<div class="benefits__item-info">

								<div class="benefits__item-title">Integration with CAM</div>

								<div class="benefits__item-description">

									<p>ACM is integrated with Compliant Access management.</p>

									<ul>

										<li>Perform risk analysis before provisioning any user changes in to SAP system.</li>

										<li>Risk Analysis reports are stored in reports catalogue and can be checked whenever needed.</li>

									</ul>

								</div>

							</div>

						</div>

					</div>

					<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">

						<div class="benefits__item-number snake__number">9</div>

						<div class="benefits__item-content" data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-once="true">

							<div class="benefits__item-icon svg-icon" data-icon="list">

								<img src="<?php echo get_template_directory_uri(); ?>/assets/images/acm_mc.png" alt="" />

							</div>

							<div class="benefits__item-info">

								<div class="benefits__item-title">Mitigation Controls</div>

								<div class="benefits__item-description">

									<p>Create mitigation controls when SoD risk can’t be mitigated.</p>

									<ul>

										<li>Business can setup mitigation controls where risk can’t be remediated, avoided.</li>

										<li>Create Mitigation controls per system level and Mitigate users.Users mitigated can be excluded from risk analysis results.</li>

									</ul>

								</div>

							</div>

						</div>

					</div>

					<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">

						<div class="benefits__item-number snake__number">10</div>

						<div class="benefits__item-content" data-aos="fade-right" data-aos-anchor-placement="center-bottom" data-aos-once="true">

							<div class="benefits__item-icon svg-icon" data-icon="chart">

								<img src="<?php echo get_template_directory_uri(); ?>/assets/images/acm_dash.png" alt="" />

							</div>

							<div class="benefits__item-info">

								<div class="benefits__item-title">Dashboards</div>

								<div class="benefits__item-description">

									<p>Management view of dashboards enables quick identification of risk status and helps in decision making.</p>

									<ul>

										<li>View SoD conflict information / Statistics on interactive dashboards.</li>

										<li>Historical information view in dash boards.</li>

										<li>Summary drill down option like risks by business process, criticality ,number of active uses, expired users of a selected system.</li>

									</ul>

								</div>

							</div>

						</div>

					</div>

					<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">

						<div class="benefits__item-number snake__number">11</div>

						<div class="benefits__item-content" data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-once="true">

							<div class="benefits__item-icon svg-icon" data-icon="mail">

								<img src="<?php echo get_template_directory_uri(); ?>/assets/images/acm_noty.png" alt="" />

							</div>

							<div class="benefits__item-info">

								<div class="benefits__item-title">Notification</div>

								<div class="benefits__item-description">

									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an</p>

									<ul>

										<li>Sending notifications on critical SoD executions.</li>

										<li>Mitigation expiry notification, assignment notifications.</li>

										</li>

									</ul>

								</div>

							</div>

						</div>

					</div>

					<div class="benefits__item snake__item col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">

						<div class="benefits__item-number snake__number">12</div>

						<div class="benefits__item-content" data-aos="fade-right" data-aos-anchor-placement="center-bottom" data-aos-once="true">

							<div class="benefits__item-icon svg-icon" data-icon="puzzle">

								<img src="<?php echo get_template_directory_uri(); ?>/assets/images/acm_int.png" alt="" />

							</div>

							<div class="benefits__item-info">

								<div class="benefits__item-title">Integrations</div>

								<div class="benefits__item-description">

									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an.</p>

									<ul>

										<li>ACM rulebook is integrated with PAM and REM.</li>

										<li>Use existin SoD risk data to </li>

										</li>

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

