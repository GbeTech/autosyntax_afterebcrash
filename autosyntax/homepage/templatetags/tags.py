from django import template
from django.utils.html import format_html
from django.utils.safestring import mark_safe

from homepage.templatetags.templatetags_utils import _span, _div, _join, quote, log

register = template.Library()


@register.simple_tag
def br(num):
	return format_html('<br>' * num)


@register.simple_tag
def list_block(*args):
	new_value = [_span("code-literal", '[')]

	for i, c in enumerate(args):
		append = quote(c) if 'span' not in c else c
		new_value.append(_span("str", append))
		if i < len(args) - 1:
			new_value.append(_span("kept", ', '))

	new_value.append(_span("code-literal", ']'))
	return format_html(_div('code-block', ''.join(new_value)))


@register.simple_tag
def dict_block(*args):
	new_value = [_span("code-literal", ' {')]

	for i, c in enumerate(args):
		line = _span("str", quote(c)) if isinstance(c, str) else _span("int", c)
		new_value.append(line)

		if i < len(args) - 1:
			line = _span("kept", ', ') if i % 2 != 0 else _span("code-literal", ': ')
			new_value.append(line)

	new_value.append(_span("code-literal", '}'))

	return mark_safe(_div('code-block', ''.join(new_value)))


@register.simple_tag
def div(value, *args, **kwargs):
	value = _join(value, args)
	value = _div(kwargs['cls'], value)
	return format_html(value)


@register.simple_tag
def a(inner, href, cls, innercls):
	return format_html(f"""<br><br>
	<a href="{href}" class="{cls}">
		{_div(innercls,inner)}
		</a>
	""")


@register.simple_tag()
def space_ptop_20(value, *args):
	value = _join(value, args)
	value = _div("space p-top-20", value)
	return format_html(value)


@register.simple_tag
def work(value, *args):
	value = _join(value, args)
	value = _div("work", value)
	return format_html(value)


@register.simple_tag
def work_indented(value, *args):
	value = _join(value, args)
	value = _div("work indented", value)
	return format_html(value)


@register.simple_tag
def page_title(value, *args):
	"""div, space p-top-20, 2 <br>"""
	value = _join(value, args)
	value = _div("space p-top-20", value)
	value += '<br>' * 2
	return format_html(value)


@register.simple_tag
def basic_text(value, *args):
	value = _join(value, args)
	value = _div("basic-text", value)
	return format_html(value)


@register.simple_tag
def basic_text_dim(value, *args):
	value = _join(value, args)
	value = _div("basic-text f-size-23 m-right-200 indented", value)
	return format_html(value)


@register.simple_tag
def mono_mright_300(value, *args):
	value = _join(value, args)
	value = _div("monospace m-right-300", value)
	return format_html(value)




@register.simple_tag
def basic_white_mright200(value, *args):
	value = _join(value, args)
	value = _div("basic-text white m-right-200", value)
	return format_html(value)
