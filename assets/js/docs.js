const $btn = $this.find('[data-role="toggle"]');
if ($btn.text() === 'Feche') {
    $btn.text('Abre');
} else {
    $btn.text('Feche');
}