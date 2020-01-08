<?php
function delete_dir($dir) {
	$dir_path = glob($dir.'/*');
	foreach ($dir_path as $instance) {
		if (is_dir($instance)) {
			 delete_dir($instance);
		}
		else {
			 unlink($instance);
		}
	}
	rmdir($dir);
}
delete_dir('Catalogue');