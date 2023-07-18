const $btn = $this.find('[data-role="toggle"]');
if ($btn.text() === 'Hide') {
    $btn.text('Show');
} else {
    $btn.text('Hide');
}